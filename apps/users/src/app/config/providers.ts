import { Provider } from "@angular/core";
import { ENVIRONMENT_TOKEN } from "@posts/config";
import { environment } from "../../environments/environment";

export const providers:Provider[] = [
    {
        provide:ENVIRONMENT_TOKEN,
        useValue:environment
    }
]