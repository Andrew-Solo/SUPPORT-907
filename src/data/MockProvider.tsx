import DomainProvider from "./DomainProvider";
import {ModelData} from "../domains/Model";
import Result from "./Result";

const mock: Dict<Dict<any>[]> = {
  "forms": [

  ],
  "products": [
    {
      id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'running_shoes_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'Performance Running Shoes',
      price: 99.99,
      image: 'https://example.com/shoes.jpg',
      description: 'High-performance running shoes for all terrains',
      group: 'Running Shoes'
    },
    {
      id: '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'sports_watch_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'Advanced Sports Watch',
      price: 149.99,
      image: 'https://example.com/watch.jpg',
      description: 'Smart sports watch with fitness tracking features',
      group: 'Sports Watches'
    },
    {
      id: '3b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'yoga_mat_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'Non-Slip Yoga Mat',
      price: 29.99,
      image: 'https://example.com/yogamat.jpg',
      description: 'Premium quality yoga mat with non-slip surface',
      group: 'Yoga Mats'
    },
    {
      id: '4b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'cycling_helmet_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'Aero Cycling Helmet',
      price: 79.99,
      image: 'https://example.com/helmet.jpg',
      description: 'Aerodynamic cycling helmet for enhanced speed and safety',
      group: 'Cycling Helmets'
    },
    {
      id: '5b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'dumbbells_set_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'Adjustable Dumbbells Set',
      price: 129.99,
      image: 'https://example.com/dumbbells.jpg',
      description: 'Versatile set of adjustable dumbbells for home workouts',
      group: 'Dumbbells'
    },
    {
      id: '6b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'tennis_racket_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'Professional Tennis Racket',
      price: 89.99,
      image: 'https://example.com/tennisracket.jpg',
      description: 'High-quality professional tennis racket for optimal performance',
      group: 'Tennis Rackets'
    },
    {
      id: '7b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'fitness_band_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'Smart Fitness Band',
      price: 49.99,
      image: 'https://example.com/fitnessband.jpg',
      description: 'Intelligent fitness band with heart rate monitoring and more',
      group: 'Fitness Bands'
    },
    {
      id: '8b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'basketball_shoes_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'High-Top Basketball Shoes',
      price: 109.99,
      image: 'https://example.com/basketballshoes.jpg',
      description: 'High-top basketball shoes with ankle support and grip',
      group: 'Basketball Shoes'
    },
    {
      id: '9b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'water_bottle_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'Insulated Water Bottle',
      price: 19.99,
      image: 'https://example.com/waterbottle.jpg',
      description: 'Double-walled insulated water bottle to keep your drink cold or hot',
      group: 'Water Bottles'
    },
    {
      id: '10b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'gym_bag_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'Spacious Gym Bag',
      price: 39.99,
      image: 'https://example.com/gymbag.jpg',
      description: 'Large and durable gym bag with multiple compartments',
      group: 'Gym Bags'
    },
    {
      id: '11b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'exercise_mat_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'Comfortable Exercise Mat',
      price: 24.99,
      image: 'https://example.com/exercisemat.jpg',
      description: 'Thick and comfortable exercise mat for various workouts',
      group: 'Exercise Mats'
    },
    {
      id: '12b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'soccer_ball_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'Official Size Soccer Ball',
      price: 29.99,
      image: 'https://example.com/soccerball.jpg',
      description: 'Regulation-size soccer ball for practice and matches',
      group: 'Soccer Balls'
    },
    {
      id: '13b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'jump_rope_1',
      created: '2023-11-11T12:00:00.000Z',
      updated: '2023-11-11T12:00:00.000Z',
      title: 'Adjustable Jump Rope',
      price: 14.99,
      image: 'https://example.com/jumprope.jpg',
      description: 'Adjustable jump rope for cardiovascular workouts',
      group: 'Jump Ropes'
    },
  ]
}

export default class MockProvider<TData extends ModelData> extends DomainProvider<TData> {
  override async get(identifier: string, params: {[prop:string]: any} = {}): Promise<Result<TData>> {
    const data = mock[this.resource].find(item => item.id === identifier || item.name === identifier) as TData;
    return new Result<TData>(true, "", data);
  }

  override async list(identifier: string = "", params: {[prop:string]: any} = {}): Promise<Result<TData[]>> {
    const data = mock[this.resource] as TData[];
    return new Result<TData[]>(true, "", data);
  }

  override async create(data: {[prop:string]: any}, identifier: string = ""): Promise<Result<TData>> {
    mock[this.resource].push(data as TData);
    return new Result<TData>(true, "", data as TData);
  }

  override async update(data: {[prop:string]: any}, identifier: string): Promise<Result<TData>> {
    const index = mock[this.resource].findIndex(item => item.id === identifier || item.name === identifier);
    mock[this.resource][index] = data as TData;
    return new Result<TData>(true, "", data as TData);
  }

  override async delete(identifier: string, params: {[prop:string]: any} = {}): Promise<Result<TData>> {
    const index = mock[this.resource].findIndex(item => item.id === identifier || item.name === identifier);
    const data = mock[this.resource][index] as TData;
    mock[this.resource].splice(index, 1);
    return new Result<TData>(true, "", data);
  }

  constructor(host: string, resource: string) {
    super(host, resource);
  }
}