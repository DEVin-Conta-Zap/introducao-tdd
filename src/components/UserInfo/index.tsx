type UserInfoProps = {
  name: string;
}
const UserInfo = ({ name }: UserInfoProps) => {

  return (
    <div>{name}</div>
  )
}

export default UserInfo