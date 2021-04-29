import AppLayout from "components/AppLayout"
import { useEffect, useState } from "react"

// -- Components
import Devit from "components/Devit"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => (
            <Devit
              avatar={avatar}
              id={id}
              key={id}
              message={message}
              username={username}
            />
          ))}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>
        {`
          header {
            align-items: center;
            border-bottom: 1px solid #ccc;
            height: 49px;
            display: flex;
            position: sticky;
            top: 0;
            width: 100%;
          }
          article {
            padding: 10px 15px;
          }
          h2 {
            font-size: 18px;
            font-weight: 800;
          }

          section {
            padding-top: 56px;
          }

          nav {
            bottom: 0;
            border-top: 1px solid #cc;
            position: sticky;
            width: 100%;
          }
        `}
      </style>
    </>
  )
}
