export interface AppConfiguration {
    title: string;
    name: string;
    path: string;
    url: string;
    devUrl?: string;
  }
  
  export function getApps(): AppConfiguration[] {
    return [
      {
        title: 'App1',
        name: 'app1',
        path: 'app1',
        url: 'http://localhost:4201',
      },
      {
        title: 'App2',
        name: 'app2',
        path: 'app2',
        url: 'http://localhost:4202',
       },{
        title: 'App3',
        name: 'app3',
        path: 'app3',
        url: 'http://localhost:4203',
       },
    ];
  }
  