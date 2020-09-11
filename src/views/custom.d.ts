type RootState = {
  tagList: Tag[]
  recordList:RecordItem[]
}

type Tag = {
  id:number,
  name: string,
  type:string
}

type RecordItem = {
  type: string
  createdAt?: string
  notes: string
  amount: number
  category: string[]
}