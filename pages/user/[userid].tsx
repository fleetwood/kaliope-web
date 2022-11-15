import { Post } from 'kaliope-types/models/post'
import { User } from 'kaliope-types/models/user'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MainLayout from '../../components/layouts/MainLayout'
import { av, UserAvatar } from '../../components/ui/userAvatar'
import { userProfile } from '../../graphql/user/userProfile'
import { convertToFirebaseError, FirebaseErrors, IFirebaseErrorCode } from '../../utils/FirebaseErrors'

const UserPage = () => {
  const router = useRouter()
  const { userid } = router.query
  const [user, setUser] = useState<User>()
  const [error, setError] = useState<IFirebaseErrorCode>()

  useEffect(() => {
    setError(FirebaseErrors.notFound)
    if (userid) {
    userProfile(userid.toString())
        .then(result => {
            if (user) {
                setError(undefined)
                setUser(result)
            }
        })
        .catch(e => setError(convertToFirebaseError(FirebaseErrors.notFound,e)))
    }
  },[userid, user])

  return (
      <MainLayout sectionTitle={user?.displayName || "User Profile"} subTitle="the writer's site">
        {error && <div className="text-red-400 italic">{error.code}: {error.message}</div>}
        {user && (
            <div>
                <UserAvatar author={user} size={av.xxl} />
            </div>
        )}
      </MainLayout>
)}

export default UserPage