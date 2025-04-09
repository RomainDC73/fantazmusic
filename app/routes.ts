import { type RouteConfig,
    route,
    index 
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("eps", "routes/eps.tsx"),
    route("shows", "routes/shows.tsx"),
    route("videos", "routes/videos.tsx"),

] satisfies RouteConfig;
