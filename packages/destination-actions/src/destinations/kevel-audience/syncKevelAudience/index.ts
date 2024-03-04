import type { ActionDefinition } from '@segment/actions-core'
import type { Settings } from '../generated-types'
import type { Payload } from './generated-types'

const action: ActionDefinition<Settings, Payload> = {
  title: 'Sync with Kevel Audience',
  description:
    "Share Segment user attributes and Segment Audiences from `track` and `identify` events to Kevel Audience using Kevel Audience tracking events and sharing data as `customFields`. By configuring Kevel Audience user attributes, this data can then be made available on the user's profile. Only users with a Segment userId will be synced.",
  defaultSubscription: 'type = "track" or type = "identify"',
  fields: {
    segment_user_id: {
      label: 'User ID',
      description: "The user's unique ID",
      type: 'string',
      unsafe_hidden: true,
      required: true,
      default: { '@path': '$.userId' }
    },
    traits_or_props: {
      label: 'Traits or properties object',
      description: 'A computed object for track and identify events. This field should not need to be edited.',
      type: 'object',
      required: true,
      unsafe_hidden: true,
      default: {
        '@if': {
          exists: { '@path': '$.properties' },
          then: { '@path': '$.properties' },
          else: { '@path': '$.traits' }
        }
      }
    }
  },
  perform: async (request, data) => {
    const baseUrl = `https://tr.${data.settings.audienceDomain}/events/server` // TODO event tracker
    const payload = {
      clientId: data.settings.clientId,
      siteId: data.settings.siteId,
      type: 'custom',
      customType: data.settings.eventType,
      user: {
        type: data.settings.userIdType,
        id: data.payload.segment_user_id
      },
      customData: data.payload.traits_or_props
    }

    return request(`${baseUrl}`, {
      json: payload,
      method: 'POST'
    })
  }
}

export default action