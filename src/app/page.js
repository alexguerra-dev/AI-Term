
export default function Home() {
    console.log(process.env)
    return (
        <div>
            <h1>Home</h1>
            {process.env.OPENAI_API_KEY}
        </div>
    );
}
