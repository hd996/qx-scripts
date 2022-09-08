const url = 'https://appiov.ftms.com.cn/ftms-iov-app-gbook/api/gbook/getDrivingMonitorInfo'
const method = 'POST'
const headers = {
  'ACCESS-TOKEN': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwZXJtaXNzaW9ucyI6WyJzZWxmIl0sImlzcyI6ImF1dGgwIiwiaWQiOiI1NjU1NDc5Iiwib3BlcmF0aW9uU291cmNlIjoiRlRNU19BUFAiLCJleHAiOjE2NjI2Mzk3MTksIm9wZXJhdG9yTmFtZSI6InVzZXIiLCJub25jZSI6IjFhYzkyYzVjNjQ4YTRmMmRhNjA2NTY3MjI1MjhjYWU3IiwiaXNPcGVyYXRvciI6ZmFsc2V9.9EweBWHwiSTycvK7W5G5ZVd7B9QwooJn40MqD9Zx4dbwpf3SqVTnSOSdtJ8mxW4i5Tot3blck4UCgsxrzrEklw',
  Connection: 'keep-alive',
  'Accept-Encoding': 'gzip, deflate, br',
  accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwZXJtaXNzaW9ucyI6WyJzZWxmIl0sImlzcyI6ImF1dGgwIiwiaWQiOiI1NjU1NDc5Iiwib3BlcmF0aW9uU291cmNlIjoiRlRNU19BUFAiLCJleHAiOjE2NjI2Mzk3MTksIm9wZXJhdG9yTmFtZSI6InVzZXIiLCJub25jZSI6IjFhYzkyYzVjNjQ4YTRmMmRhNjA2NTY3MjI1MjhjYWU3IiwiaXNPcGVyYXRvciI6ZmFsc2V9.9EweBWHwiSTycvK7W5G5ZVd7B9QwooJn40MqD9Zx4dbwpf3SqVTnSOSdtJ8mxW4i5Tot3blck4UCgsxrzrEklw',
  'USER-ID': '5655479',
  'Content-Type': 'application/json',
  userId: '5655479',
  'User-Agent': 'ToyotaUccn/5.4.12 (iPhone; iOS 15.5; Scale/3.00)',
  Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwZXJtaXNzaW9ucyI6WyJzZWxmIl0sImlzcyI6ImF1dGgwIiwiaWQiOiI1NjU1NDc5Iiwib3BlcmF0aW9uU291cmNlIjoiRlRNU19BUFAiLCJleHAiOjE2NjI2Mzk3MTksIm9wZXJhdG9yTmFtZSI6InVzZXIiLCJub25jZSI6IjFhYzkyYzVjNjQ4YTRmMmRhNjA2NTY3MjI1MjhjYWU3IiwiaXNPcGVyYXRvciI6ZmFsc2V9.9EweBWHwiSTycvK7W5G5ZVd7B9QwooJn40MqD9Zx4dbwpf3SqVTnSOSdtJ8mxW4i5Tot3blck4UCgsxrzrEklw',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwZXJtaXNzaW9ucyI6WyJzZWxmIl0sImlzcyI6ImF1dGgwIiwiaWQiOiI1NjU1NDc5Iiwib3BlcmF0aW9uU291cmNlIjoiRlRNU19BUFAiLCJleHAiOjE2NjI2Mzk3MTksIm9wZXJhdG9yTmFtZSI6InVzZXIiLCJub25jZSI6IjFhYzkyYzVjNjQ4YTRmMmRhNjA2NTY3MjI1MjhjYWU3IiwiaXNPcGVyYXRvciI6ZmFsc2V9.9EweBWHwiSTycvK7W5G5ZVd7B9QwooJn40MqD9Zx4dbwpf3SqVTnSOSdtJ8mxW4i5Tot3blck4UCgsxrzrEklw',
  Cookie: 'JSESSIONID=252ABD5B84FC5989EA15D3E29931BB4F; PHPSESSID=16v5hpa6mho1m7nioffa57n2e7',
  Host: 'appiov.ftms.com.cn',
  'Accept-Language': 'zh-Hans-CN;q=1',
  Accept: '*/*',
}
const body = '{"vin":"LFMKN5BF5M3164628"}'

const myRequest = {
  url,
  method,
  headers,
  body,
}

$task.fetch(myRequest).then(response => {
  console.log(response.statusCode + '\n\n' + response.body)
  const { result } = JSON.parse(response.body)
  const { km, oilRate, oilWaste } = result
  $notify('一汽丰田', `里程：${km}\n\n油量：${oilRate}\n\n油耗${oilWaste}`)
  $done()
}, reason => {
  console.log(reason.error)
  $done()
})
