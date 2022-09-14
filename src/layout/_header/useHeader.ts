import { LayoutContext } from './../_context/LayoutContextProvider';
import * as React from 'react';

export default function useHeader() {
    const { theme, changeTheme } = React.useContext(LayoutContext);

    const onClick = React.useCallback(() => {
        changeTheme();
    }, [changeTheme])

    return {
        theme,
        onClick
    }
}