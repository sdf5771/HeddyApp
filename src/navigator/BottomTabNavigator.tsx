import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Screen from '../components/Screen';

import HealthReportLogoDefault from '../assets/svgs/navigator/HealthReportLogoDefault.svg';
import HealthReportLogoActive from '../assets/svgs/navigator/HealthReportLogoActive.svg';
import RecordLogoDefault from '../assets/svgs/navigator/RecordLogoDefault.svg';
import RecordLogoActive from '../assets/svgs/navigator/RecordLogoActive.svg';
import MyPageLogoDefault from '../assets/svgs/navigator/MyPageLogoDefault.svg';
import MyPageLogoActive from '../assets/svgs/navigator/MyPageLogoActive.svg';

const Tab = createBottomTabNavigator();

function BottomTabNavigator(){

    return (
        <Tab.Navigator 
            initialRouteName='건강 리포트'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
            }}
            >
                <Tab.Screen 
                    name="건강 리포트"
                    component={Screen.HealthReportScreen}
                    options={{
                        tabBarIcon: ({focused, color, size}) => {
                            return (
                                !focused ? 
                                <HealthReportLogoDefault width={40} height={40} />
                                : 
                                <HealthReportLogoActive width={40} height={40} />
                            )
                        }
                    }}
                />
                <Tab.Screen 
                    name="기록"
                    component={Screen.RecordScreen}
                    options={{
                        tabBarIcon: ({focused, color, size}) => {
                            return (
                                !focused ? 
                                <RecordLogoDefault width={40} height={40} />
                                : 
                                <RecordLogoActive width={40} height={40} />
                            )
                        }
                    }}
                />
                <Tab.Screen 
                    name="마이페이지"
                    component={Screen.MyPageScreen}
                    options={{
                        tabBarIcon: ({focused, color, size}) => {
                            return (
                                !focused ? 
                                <MyPageLogoDefault width={40} height={40} />
                                : 
                                <MyPageLogoActive width={40} height={40} />
                            )
                        }
                    }}
                />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;