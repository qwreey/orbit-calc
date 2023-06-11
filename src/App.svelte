<script lang="ts">
  import { onMount } from 'svelte'
  import {
    writable,
    type Writable,
  } from 'svelte/store'
  
  import Panzoom from './Panzoom.svelte'
  import {
    type orbitContents,
    type planetData,
    type orbitData,
    planetsBase,
    AU,
    DAY,
    YEAR,
    CENTURY,
    J2000,
    DEG_TO_RAD,
    RAD_TO_DEG,
  } from './constant'

  // calculated units
  let sizeUnitMut:number = 20
  let distanceUnitMut:number = 8000000000000000
  let sunMut:number = 40
  let sizeUnit:number
  let distanceUnit:number
  let daysMut:number = 60
  $: {
    sizeUnit = 1/sizeUnitMut
    distanceUnit = AU/distanceUnitMut
  }

  interface planet extends planetData {
    left: number,
    top: number,
    updateImg: ()=>void|undefined,
    updateLabel: ()=>void|undefined,
  }
  const planets:planet[] = []
  planetsBase.forEach(element => {
    planets.push({
      image: element.image,
      label: element.label,
      left: 0,
      top: 0,
      name: element.name,
      orbit: element.orbit,
      orbitRadius: element.orbitRadius,
      radius: element.radius,
      updateImg: undefined,
      updateLabel: undefined,
    })
  })

  $: {
    planets[0].radius = planetsBase[0].radius / sunMut
  }

  // calculate today
  let today = computeTime(new Date())

  function computeTime(now: Date|number) {
    let epoch = (+now - +J2000) / 1000
    return epoch / DAY / CENTURY
  }

  interface computed extends orbitContents {w:number,M:number}
  function computeOrbit(orbitData:orbitData,T: number) {
    let computed:computed&any = {}
    computed = Object.keys(orbitData.base).reduce((carry, el) => {
      carry[el] = orbitData.base[el] + ((orbitData.cy[el] || 0) * T)
      return carry
    }, computed)

    computed.M = computed.l - computed.lp
    computed.a *= 1000
    computed.i *= DEG_TO_RAD
    computed.o *= DEG_TO_RAD
    computed.w *= DEG_TO_RAD
    computed.M *= DEG_TO_RAD
    computed.E = getEccentricity(kepler(computed.e, computed.M), computed.M, 6)
    // console.log(computed.E)

    computed.pos = {x: null, y: null};
    computed.pos.x = computed.a * (Math.cos(computed.E) - computed.e);
    computed.pos.y = computed.a * (Math.sqrt(1 - (computed.e * computed.e))) * Math.sin(computed.E);

    computed.r = Math.sqrt(Math.pow(computed.pos.x, 2) + Math.pow(computed.pos.y, 2));
    computed.v = Math.atan2(computed.pos.y, computed.pos.x);

    computed.r /= (1000 * AU);
    computed.v *= RAD_TO_DEG;

    return computed
  }

  function getEccentricity(callback:(x:number)=>any, x0:number, maxCount:number) {
    let x = 0
    let x2 = x0
    for(let i = 0; i < maxCount; i++) {
      x = x2
      x2 = callback(x)
    }
    return x
  }

  function kepler(e:number, M:number) {
    return (x:number) => {
      return x + (M + e * Math.sin(x) - x) / (1 - e * Math.cos(x))
    }
  }

  let dateText:string = "undefined"
  onMount(()=>{
    let iter:number = 0
    function animate() {
      const T:number = today+(iter/CENTURY)
      dateText = (new Date(T*CENTURY*DAY*1000 + +J2000)).toDateString()
      for (const planet of planets) {
        const computed = computeOrbit(planet.orbit, T)
        planet.top = computed.pos.y
        planet.left = computed.pos.x
        if (planet.updateImg) planet.updateImg()
        if (planet.updateLabel) planet.updateLabel()
      }
  
      iter += 1 * (daysMut/60)
      requestAnimationFrame(animate)
    }
    animate()
  })

  function bindImg(element:HTMLElement,planet:planet) {
    planet.updateImg = ()=>{
      element.style.left = (planet.left*distanceUnit - planet.radius/2*sizeUnit) + "px"
      element.style.top = (planet.top*distanceUnit - planet.radius/2*sizeUnit) + "px"
    }
  }
  function bindLabel(element:HTMLElement,planet:planet) {
    planet.updateLabel = ()=>{
      element.style.left = (planet.left*distanceUnit) + "px"
      element.style.top = (planet.top*distanceUnit + planet.radius/2*sizeUnit) + "px"
    }
  }

</script>

<main>
  <Panzoom options={{ scale: 0.1 }}>
    <div id=planetHolder>
      {#each planets as planet}
        <img
          use:bindImg={planet}
          draggable="false"
          class="planet"
          src={planet.image}
          alt={planet.name}
          style:height={planet.radius*sizeUnit}px
          style:width={planet.radius*sizeUnit}px
        >
        <p
          use:bindLabel={planet}
          class="planet"
        >{planet.label}</p>
      {/each}
    </div>
  </Panzoom>
  <div id="topbar">
    <p class="title">행성궤도 시뮬레이터 dev@qwreey.kr</p>
    <p class="inputLabel">행성 축소 배율(km)</p>
    <input class="input" bind:value={sizeUnitMut}>
    <p class="inputLabel">궤도 축소 배율(au)</p>
    <input class="input" style:width=150px bind:value={distanceUnitMut}>
    <p class="inputLabel">태양 축소 배율(au)</p>
    <input class="input" bind:value={sunMut}>
    <p class="inputLabel">초당 일 수(days)</p>
    <input class="input" bind:value={daysMut}>
    <p class="inputLabel">시간: {dateText}</p>
  </div>
</main>

<style>
  #planetHolder p {
    font-size: 10em;
    color: white;
    width: 100px;
    transform: translateX(-100px);
  }
  .title {
    margin-right: 12px;
  }
  .inputLabel {
    margin-right: 12px;
    font-size: 0.8rem;
  }
  .input {
    margin-right: 12px;
    width: 60px;
    font-size: 0.8rem;
  }
  .planet {
    position: absolute;
    transform-origin: center;
    user-select: none;
  }
  #planetHolder {
    width: 0px;
    height: 0px;
    position: relative;
  }
  main {
    position: relative;
    background-color: black;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  #topbar {
    display: flex;
    padding: 0 20px;
    align-items: center;
    width: 100vw;
    height: 60px;
    background-color: rgb(180,180,180);
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: auto;
  }
</style>
