import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RootNavigator } from "./src/navigator";

const queryClient = new QueryClient();

function Navigator(){

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </QueryClientProvider>
    )
}

export default Navigator;