
import { EmptyString, SITE_HOST } from '@/components/utils/constants'

export default function apiRouteGuard(handler: any) {
  return async (req: any, res: any) => {
    let siteHostValid = undefined
    let siteOriginValid = undefined
    let siteRefererValid = undefined
    let token = EmptyString


    const siteHost = req?.headers?.host
    const siteOrigin = req?.headers?.origin
    const siteReferer = req?.headers?.referer
    const siteHosts =
      process.env.NODE_ENV === 'development'
        ? ['localhost']
        : SITE_HOST?.split(',')
    if (siteHosts?.length) {
      siteHostValid = siteHosts?.find((x: string) => siteHost?.includes(x))
      siteOriginValid = siteHosts?.find((x: string) => siteOrigin?.includes(x))
      siteRefererValid = siteHosts?.find((x: string) => siteReferer?.includes(x))
    }

    if ( siteRefererValid || (siteHostValid && siteOriginValid)) {
      try {
   
        // Call the original API route handler
        return await handler(req, res)
      } catch (error) {
        return res.status(500).json({ error })
      }
    }
    return res.status(401).json({ error: 'Unauthorized' })
  }
}
