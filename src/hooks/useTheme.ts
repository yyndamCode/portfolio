import {useDispatch, useSelector} from 'react-redux';
import {toggleDarkMode} from "@/store/slices/darkModeSlice";

const useTheme = () => {
    const isDarkMode = useSelector((state: any) => state.darkMode.isDarkMode);
    const dispatch = useDispatch();
    const handleToggleTheme = () => {
        dispatch(toggleDarkMode());
    };
    return {isDarkMode, toggleDarkMode: handleToggleTheme};
};

export default useTheme;