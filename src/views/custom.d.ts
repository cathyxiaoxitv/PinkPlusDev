type RootState = {
  tagList: Tag[]
  recordList:RecordItem[]
}

type Tag = {
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