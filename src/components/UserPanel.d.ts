/// <reference types="react" />
import { User } from '../types/User';
export interface UserPanelProps {
    user: User;
    show: boolean;
    logOut: Function;
}
declare const UserPanel: (props: UserPanelProps) => JSX.Element;
export default UserPanel;
