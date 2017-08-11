import {AppNavigator} from '../AppNavigation';
import { NavigationActions } from 'react-navigation';
const NavReducer = (state, action) => {
    let newState;
    switch (action.type) {
        case 'goToProfile':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Profile' }),
                state
            );
            break;
         case 'resetIndex':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Index'})
                  ]
                }),
                // NavigationActions.navigate({ routeName: 'DetailsRoute1' }),
                state
            );
            break;
        case 'goToDetailsRoute3':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'DetailsRoute3' }),
                state
            );
            break;
        case 'goToNotes':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Notes' }),
                state
            );
            break;
        case 'goToWebView':
        newState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Web_View' }),
              {...state, webViewURL : action.webViewURL}
        );
        break;
        default:
            newState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return newState || state;
};

export default NavReducer;
