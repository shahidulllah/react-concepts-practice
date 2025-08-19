
const LoginPage = () => {
    return (
        <div>
            <form >
                <label>Email</label>
                <input type="email" name="email" placeholder="Write your email" />
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" />
            </form>
        </div>
    );
};

export default LoginPage;