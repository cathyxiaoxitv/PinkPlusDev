type RootState = {
  tagList: Tag[]
  recordList:RecordItem[]
  createTagError:Error|null
}

type Tag = {
  id:string,
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

type ReportItem = {
  text:string
  value:string
}