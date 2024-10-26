import { useDispatch } from 'react-redux';
import { NavigationScreens } from '../../constants/Strings';
import { getAuthID } from '../../constants/AsyncStorage';
import { setAuthIDInRedux } from '../../redux/Authentication/AuthAction';
import { useEffect } from 'react';
import { navigationToReplace } from '../../constants/NavigationController';

const useScreenHooks = (props) => {

    // Variables
    const navigation = props.navigation;
    const dispatch = useDispatch();

    // UseStates


    // UseEffects
    useEffect(() => {
        getFromStorage();
    }, [])

    // Methods
    const getFromStorage = async () => {
        const authId = await getAuthID();
        authId && dispatch(setAuthIDInRedux(authId));
        setTimeout(() => {
            if (authId) {
                navigationToReplace(navigation, NavigationScreens.HomeTab);
            } else {
                navigationToReplace(navigation, NavigationScreens.AuthenticationScreen);
            }
        }, 2500);
    }

    return {};
}

export default useScreenHooks