import { inject, InjectionToken } from "@angular/core"
import { createClient } from "@supabase/supabase-js"
import {ENVIRONMENT_TOKEN} from '@posts/config'


export const createSupabaseClient = () => {
    const environment = inject(ENVIRONMENT_TOKEN)
    return createClient(environment.projectUrl,environment.apiKey)
}