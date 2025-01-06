import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Screen from '../components/Screen';
import { HealthReportLogoActive, HealthReportLogoDefault, MyPageLogoActive, MyPageLogoDefault, RecordLogoActive, RecordLogoDefault } from '../assets/svgs/navigator';


const Tab = createBottomTabNavigator();

function BottomTabNavigator(){

    return (
        <Tab.Navigator 
            initialRouteName='건강 리포트'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    height: 82,
                    paddingBottom: 16,
                },
                tabBarLabelPosition: 'below-icon',
                tabBarLabelStyle: {
                    fontFamily: 'NanumSquareRoundEB',
                    fontSize: 12,
                    fontWeight: '700',
                },
                tabBarActiveTintColor: '#1F5FFF',
                tabBarInactiveTintColor: '#808080',
            }}
            >
                <Tab.Screen 
                    name="건강 리포트"
                    component={Screen.HealthReportScreen}
                    options={{
                        tabBarIcon: ({focused, color, size}) => (!focused ? <HealthReportLogoDefault width={40} height={40} /> : <HealthReportLogoActive width={40} height={40} />),
                    }}
                />
                <Tab.Screen 
                    name="기록 카드"
                    component={Screen.RecordScreen}
                    options={{
                        tabBarIcon: ({focused, color, size}) => (!focused ? <RecordLogoDefault width={40} height={40} /> : <RecordLogoActive width={40} height={40} />),
                    }}
                />
                <Tab.Screen 
                    name="마이페이지"
                    component={Screen.MyPageScreen}
                    options={{
                        tabBarIcon: ({focused, color, size}) => (!focused ? <MyPageLogoDefault width={40} height={40} /> : <MyPageLogoActive width={40} height={40} />),
                    }}
                />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;