import { type RouteConfig,
    route,
    index 
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("khimaira", "routes/khimaira.tsx"),
    route("eps", "routes/eps.tsx"),
    route("shows", "routes/shows.tsx"),
    route("radio", "routes/radio.tsx"),
    route("contact", "routes/contact.tsx"),


] satisfies RouteConfig;
