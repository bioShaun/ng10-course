import { Injectable } from '@angular/core';
import {ComponentsModule} from '../../components.module';

export interface Mobile {
  id: string;
  name: string;
}

@Injectable()
export class MobileService {
  private mobiles: Mobile[] = [
    {
      id: 'm1',
      name: '华为'
    },
    {
      id: 'm2',
      name: '小木'
    },
    {
      id: 'm3',
      name: 'oppo'
    }
  ]
  constructor() {
    console.log('new Mobile service');
  }
  getMoibles() {
    return this.mobiles;
  }
  getMoible(id: string): Mobile {
    return this.mobiles.find(item => item.id === id);
  }
}
