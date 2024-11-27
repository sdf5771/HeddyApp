import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RootNavigator } from "./src/navigator";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LoadingProvider } from "./src/components/templates";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

function Navigator(){

    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <LoadingProvider>
                    <NavigationContainer>
                        <GestureHandlerRootView style={{flex: 1}}>
                            <BottomSheetModalProvider>
                                <RootNavigator />
                            </BottomSheetModalProvider>
                        </GestureHandlerRootView>
                    </NavigationContainer>
                </LoadingProvider>
            </RecoilRoot>
        </QueryClientProvider>
    )
}

export default Navigator;