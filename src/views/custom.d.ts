
type RootState = {
  tagList: Tag[],
  recordList:RecordItem[]
  createTagError:Error|null
}

export type Tag = {
  id:string,
  svg:string,
  name: string,
  type:string
}



type RecordItem = {
  type: string
  createdAt?: string
  notes: string
  amount: number
  category: Tag
}
