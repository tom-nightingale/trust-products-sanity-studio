import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'

import {
  FiHome,
  FiAlertCircle,
  FiAlignLeft,
  FiBox,
  FiCornerDownLeft,
  FiClipboard
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Global').child(S.editor().id('global').schemaType('global').documentId('global').views(getPreview('global'))).icon(FiAlertCircle),
      S.divider(),
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      S.listItem().title('Shipping & Delivery').child(S.editor().id('shipping-delivery').schemaType('shipping-delivery').documentId('shipping-delivery').views(getPreview('shipping-delivery'))).icon(FiBox),
      S.divider(),
      S.listItem().title('Returns').child(S.editor().id('returns').schemaType('returns').documentId('returns').views(getPreview('returns'))).icon(FiCornerDownLeft),
      S.divider(),
      S.listItem().title('Terms & Conditions').child(S.editor().id('terms-conditions').schemaType('terms-conditions').documentId('terms-conditions').views(getPreview('terms-conditions'))).icon(FiClipboard),
    ]);