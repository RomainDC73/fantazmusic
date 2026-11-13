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
    route("videos", "routes/videos.tsx"),


] satisfies RouteConfig;
