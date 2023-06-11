<script lang="ts">
  class PanzoomHandler {
    element:HTMLElement

    // 상대 좌표를 구하기 위한 마우스 이전값
    lastX:number
    lastY:number
    isDown:boolean // 마우스 다운 여부

    // 엘리멘트 실제 위치
    posX:number
    posY:number
    scale:number

    // 애니메이션을 위한 lerp 버퍼
    bufferScale:number
    bufferX:number
    bufferY:number
    bufferRequested:boolean
    bufferRate:number

    // 줌 스탭
    step:number

    constructor(element: HTMLElement,options) {
      this.lastX,
      this.lastY,
      this.isDown,
      this.posX = options.x || 0,
      this.posY = options.y || 0,
      this.scale = options.scale || 1,
      this.bufferScale = options.scale || 1,
      this.bufferX = 0,
      this.bufferY = 0,
      this.bufferRequested = false
      this.element = element
      this.bufferRate = 0.16
      this.step = options.step || 9/10

      this.updatePos()
      this.initEvents()
    }

    updatePos() {
      this.element.style.transform =
      `scale(${this.scale}) translate(${this.posX}px, ${this.posY}px)`
    }

    updateBuffer() {
      if (Math.abs(this.bufferX) < 1) this.bufferX = 0
      if (Math.abs(this.bufferY) < 1) this.bufferY = 0
      if (Math.abs(this.bufferScale-this.scale) < 0.00000001) {
        this.scale = this.bufferScale
      }
  
      if (this.bufferX === 0 && this.bufferY === 0 && this.scale == this.bufferScale) {
        this.bufferRequested = false
        this.updatePos()
        return
      }
  
      this.scale = this.scale + (this.bufferScale-this.scale)*0.28
      this.posX += this.bufferX*this.bufferRate
      this.posY += this.bufferY*this.bufferRate
      this.bufferX = this.bufferX*(1-this.bufferRate)
      this.bufferY = this.bufferY*(1-this.bufferRate)
      this.updatePos()
      requestAnimationFrame(this.updateBuffer.bind(this))
    }

    updateBufferRequest() {
      if (this.bufferRequested) return
      this.bufferRequested = true
      requestAnimationFrame(this.updateBuffer.bind(this))
    }

    initEvents() {
      this.element.parentElement.addEventListener("mousemove",(e)=>{
        if (!this.isDown) return
        
        const diffX:number = e.x-this.lastX, diffY:number = e.y-this.lastY
        this.lastX = e.x
        this.lastY = e.y
        this.bufferX += diffX/this.scale
        this.bufferY += diffY/this.scale
        
        this.updateBufferRequest()
      })
      this.element.parentElement.addEventListener("mousedown",(e)=>{
        this.lastX = e.x
        this.lastY = e.y
        this.isDown = true
      })
      const over = ()=>{
        this.isDown = false
      }
      this.element.parentElement.addEventListener("mouseup",over)
      this.element.parentElement.addEventListener("mouseleave",over)
      this.element.parentElement.addEventListener("wheel",(e)=>{
        if (e.deltaY > 0) {
          this.bufferScale *= this.step
        } else {
          this.bufferScale /= this.step
        }
        this.updateBufferRequest()
      })
    }
  }

  export let options:any

  function usePanzoom(element:HTMLElement) {
    const panzoomHandler = new PanzoomHandler(element,options)
  }

</script>

<div id="holder">
  <div id="panFrame" use:usePanzoom>
    <slot/>
  </div>
</div>

<style>
  #panFrame {
    height: 100%;
    overflow: visible;
  }
  #holder {
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
</style>
