import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import RestaurantInfoScreen from "./src/screens/RestaurantInfoScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  RestaurantInfo: RestaurantInfoScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Foodie Hub'
  }
})

export default createAppContainer(navigator);