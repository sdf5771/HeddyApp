import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RootNavigator } from "./src/navigator";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient();

function Navigator(){

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <GestureHandlerRootView style={{flex: 1}}>
                    <BottomSheetModalProvider>
                        <RootNavigator />
                    </BottomSheetModalProvider>
                </GestureHandlerRootView>
            </NavigationContainer>
        </QueryClientProvider>
    )
}

export default Navigator;