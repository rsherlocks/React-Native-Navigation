

import { Navigation } from "react-native-navigation";
import App from './App';
import Home from './Home';
import Cart from './Cart';
import Message from './Message';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('home',()=>Home);
Navigation.registerComponent('cart',()=>Cart);
Navigation.registerComponent('message',()=>Message);
const bottomTabs={
    children:[
        {
            component:{
                name:'home',
                options: {
                    bottomTab:{
                        text:'Home',
                        icon:require('./image/color.png')
                    }
                }
            }

        },
        {
            component:{
                name:'cart',
                options: {
                    bottomTab: {
                        text:'Cart',
                        icon:require('./image/commerce-and-shopping.png')
                    }
                }

}


        },
        {
            component:{
                name:'message',
                options: {
                    bottomTab: {
                        text:'Message',
                        icon:require('./image/communication.png')
                    }
                }
            }

        },
        {
            component:{
                name:'com.myApp.WelcomeScreen',
                options: {
                    bottomTab: {
                        text:'React',
                        icon:require('./image/communication.png')
                    }
                }
            }

        }
    ]
}
Navigation.events().registerAppLaunchedListener(() => {
       Navigation.setRoot({
             root: {
                 bottomTabs
                 // component: {
                 //     name: 'com.myApp.WelcomeScreen'
                 //     //name:'home'
                 // }
             }
      });
    });
