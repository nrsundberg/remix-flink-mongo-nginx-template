import {TypographyH2} from "~/components/typography/Typography2";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger
} from "~/components/ui/navigation-menu";

export default function AppBar() {
    return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger>
                    {TypographyH2("Emailer Pro")}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                    <NavigationMenuLink>Docs</NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger>
                    About
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                    <NavigationMenuLink>Docs</NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>

        </NavigationMenuList>
    </NavigationMenu>
    )
}