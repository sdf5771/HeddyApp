import React from 'react';
import { useRecoilState } from 'recoil';
import { MotionLoading } from '../organisms';
import { motionLoadingState } from '../../stores';

type TProps = {
    children: React.ReactNode
}

/**
 * 어플리케이션 내에서 사용하는 Loading Component 상태를 가지고 렌더링 시켜주는 Provider Component
 * @param {Object} props 
 * @param {React.ReactNode} props.children 
 * @returns {JSX.Element}
 */
function LoadingProvider({children}: TProps){
    const [isMotionLoading, setIsMotionLoading] = useRecoilState(motionLoadingState);

    return(
        <>
        {children}
        {isMotionLoading ? <MotionLoading /> : null}
        </>
    )
}

export default LoadingProvider;