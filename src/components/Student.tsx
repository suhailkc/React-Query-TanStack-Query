import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Student = () => {

  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:3000/students')
    return response.data
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ['student'],
    queryFn: fetchStudents
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1> Student List</h1>
      <ul>
        {data && 
        data.map(student => (
          <li key={student.id}>{student.name} - {student.grade}</li>
        ))}
      </ul>
    </div>
  )
}
export default Student