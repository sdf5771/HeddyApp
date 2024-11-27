import { atom, RecoilState } from "recoil";

export const initializeMotionLoadingState = false;

const motionLoadingState: RecoilState<boolean> = atom<boolean>({
    key: 'motionLoadingState',
    default: initializeMotionLoadingState
})

export default motionLoadingState;