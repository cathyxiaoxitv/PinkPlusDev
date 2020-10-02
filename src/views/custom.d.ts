
type RootState = {
  tagList: Tag[],
  recordList:RecordItem[]
  createTagError:Error|null
}

export type Tag = {
  id:string,
  svg:string,
  name: string,
  type:moneyType
}

type moneyType = 'income'|'expense'

type RecordItem = {
  type: moneyType
  createdAt?: string
  notes: string
  amount: number
  category: Tag
}
