import type {StructureResolver} from 'sanity/structure'

const SINGLETONS = ['settings']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site settings')
        .child(S.document().schemaType('settings').documentId('settings').title('Site settings')),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !SINGLETONS.includes(item.getId() ?? '')),
    ])
