import type { Payload as AddToAudiencePayload } from './addToAudience/generated-types'
import type { Payload as RemoveFromAudiencePayload } from './removeFromAudience/generated-types'

export type ListOperation = 'add' | 'remove'

export type UpdateHandlerPayload = AddToAudiencePayload & RemoveFromAudiencePayload

export type IdType = 'hashedEmail' | 'hashedPhoneNumber' | 'mobileId' | 'publisherProvidedId'

export type SupportedIdentifiers = {
  [key in IdType]?: string
}

// TODO Remove any
export type BasicListTypeMap =
  | { basicUserList: any; [key: string]: any }
  | { crmBasedUserList: any; [key: string]: any }

export type BasicListAddTypeOperation = {
  create: {
    userIdentifiers: [SupportedIdentifiers]
  }
}

export type BasicListRemoveTypeOperation = {
  remove: {
    userIdentifiers: [SupportedIdentifiers]
  }
}

export type CustomerMatchAddListOperation = {
  create: {
    userIdentifiers: [SupportedIdentifiers]
  }
}

export type CustomerMatchRemoveListOperation = {
  remove: {
    userIdentifiers: [SupportedIdentifiers]
  }
}

export type ListAddOperation = BasicListAddTypeOperation | CustomerMatchAddListOperation
export type ListRemoveOperation = BasicListRemoveTypeOperation | CustomerMatchRemoveListOperation
