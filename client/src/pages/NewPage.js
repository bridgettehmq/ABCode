import { useAuth } from "../util/auth";

export default function NewPage() {
  const { user } = useAuth();
  
  return (
    <div>
      <h1>Welcome!</h1>
      
      <hr />
      <p>This is where the content will go</p>
    </div>
  );
}
