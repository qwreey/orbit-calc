
import earth from './assets/earth.jpg'
import sun from './assets/sun.jpg'
import mercury from './assets/mercury.jpg'
import venus from './assets/venus.jpg'
import mars from './assets/mars.webp'
import jupiter from './assets/jupiter.jpg'
import saturn from './assets/saturn.jpg'
import uranus from './assets/uranus.webp'
import neptune from './assets/neptune.jpg'

export type SECONDS = number
export const AU: KM = 149597870
export const DAY: SECONDS = 60 * 60 *24
export const YEAR: SECONDS = 365.25
export const CENTURY: SECONDS = 100 * YEAR
export const J2000:Date = new Date('2000-01-01T12:00:00-00:00')
export const DEG_TO_RAD:number = Math.PI / 180;
export const RAD_TO_DEG:number = 180 / Math.PI

export type orbitContents = {
  a:number,
  // 이심률
  e:number,
  // 기울기
  i:number,
  // 승교점 적경
  l:number,
  // 평균 경도
  lp:number,
  // 근일점 경도
  o:number
}
export type orbitData = {
  // J2000 때의 측정값
  base: orbitContents,
  // 세기당 요소 변화량
  cy: orbitContents
}
export type KM = number
export type planetData = {
  name: string,
  label: string,
  image: string,
  orbitRadius: number,
  radius: KM,
  // top: KM, left: KM,
  orbit: orbitData
}

// planets
export const planetsBase:planetData[] = [
  {
    name: "Sun",
    label: "태양",
    image: sun,
    orbitRadius: 0,
    radius: 696340,
    // top: 0, left: 0,
    orbit: {
      base: {
        a: 0,
        e: 0,
        i: 0,
        l: 0,
        lp: 0,
        o: 0
      },
      cy: {
        a: 0,
        e: 0,
        i: 0,
        l: 0,
        lp: 0,
        o: 0
      }
  }
  },
  {
    name: "Mercury",
    label: "수성",
    image: mercury,
    radius: 2439,
    orbitRadius: 0.39,
    // top: 0, left: 20,
    orbit: {
      base: {
        a: 0.38709927 * AU,
        e: 0.20563593,
        i: 7.00497902,
        l: 252.25032350,
        lp: 77.45779628,
        o: 48.33076593
      },
      cy: {
        a: 0.00000037 * AU,
        e: 0.00001906,
        i: -0.00594749,
        l: 149472.67411175,
        lp: 0.16047689,
        o: -0.12534081
      }
    }
  },
  {
    name: "Venus",
    label: "금성",
    image: venus,
    radius: 6051,
    orbitRadius: 0.72,
    // top: 0, left: 40,
    orbit: {
      base: {
        a: 0.72333566 * AU,
        e: 0.00677672,
        i: 3.39467605,
        l: 181.97909950,
        lp: 131.60246718,
        o: 76.67984255
      },
      cy: {
        a: 0.00000390 * AU,
        e: -0.00004107,
        i: -0.00078890,
        l: 58517.81538729,
        lp: 0.00268329,
        o: -0.27769418
      }
    }
  },
  {
    name: "Earth",
    label: "지구",
    image: earth,
    radius: 6371,
    orbitRadius: 1,
    // top: 0, left: 60,
    orbit: {
      base: {
        a: 1.00000261 * AU,
        e: 0.01671123,
        i: -0.00001531,
        l: 100.46457166,
        lp: 102.93768193,
        o: 0.0
      },
      cy: {
        a: 0.00000562 * AU,
        e: -0.00004392,
        i: -0.01294668,
        l: 35999.37244981,
        lp: 0.32327364,
        o: 0.0
      }
    }
  },
  {
    name: "Mars",
    label: "화성",
    image: mars,
    radius: 3389,
    orbitRadius: 1.52,
    // top: 0, left: 80,
    orbit: {
      base: {
        a: 1.52371034 * AU,
        e: 0.09339410,
        i: 1.84969142,
        l: -4.55343205,
        lp: -23.94362959,
        o: 49.55953891
      },
      cy: {
        a: 0.00001847 * AU,
        e: 0.00007882,
        i: -0.00813131,
        l: 19140.30268499,
        lp: 0.44441088,
        o: -0.29257343
      }
    }
  },
  {
    name: "Saturn",
    label: "목성",
    image: jupiter,
    radius: 58232,
    orbitRadius: 1.52,
    // top: 0, left: 100,
    orbit: {
      base: {
        a: 5.20288700 * AU,
        e: 0.04838624,
        i: 1.30439695,
        l: 34.39644051,
        lp: 14.72847983,
        o: 100.47390909
      },
      cy: {
        a: -0.00011607 * AU,
        e: -0.00013253,
        i: -0.00183714,
        l: 3034.74612775,
        lp: 0.21252668,
        o: 0.20469106
      }
    }
  },
  {
    name: "Saturn",
    label: "토성",
    image: saturn,
    radius: 69911*1.3,
    orbitRadius: 1.52,
    // top: 0, left: 120,
    orbit: {
      base: {
        a: 9.53667594 * AU,
        e: 0.05386179,
        i: 2.48599187,
        l: 49.95424423,
        lp: 92.59887831,
        o: 113.66242448
      },
      cy: {
        a: -0.00125060 * AU,
        e: -0.00050991,
        i: 0.00193609,
        l: 1222.49362201,
        lp: -0.41897216,
        o: -0.28867794
      }
    }
  },
  {
    name: "Uranus",
    label: "천왕성",
    image: uranus,
    radius: 25362,
    orbitRadius: 1.52,
    // top: 0, left: 140,
    orbit: {
      base: {
        a: 19.18916464 * AU,
        e: 0.04725744,
        i: 0.77263783,
        l: 313.23810451,
        lp: 170.95427630,
        o: 74.01692503
      },
      cy: {
        a: -0.00196176 * AU,
        e: -0.00004397,
        i: -0.00242939,
        l: 428.48202785,
        lp: 0.40805281,
        o: 0.04240589
      }
    }
  },
  {
    name: "Neptune",
    label: "해왕성",
    image: neptune,
    radius: 24622,
    orbitRadius: 1.52,
    // top: 0, left: 160,
    orbit: {
      base: {
        a: 30.06992276 * AU,
        e: 0.00859048,
        i: 1.77004347,
        l: -55.12002969,
        lp: 44.96476227,
        o: 131.78422574
      },
      cy: {
        a: 0.00026291 * AU,
        e: 0.00005105,
        i: 0.00035372,
        l: 218.45945325,
        lp: -0.32241464,
        o: -0.00508664
      }
    }
  },
]
