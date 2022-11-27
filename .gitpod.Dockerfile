FROM gitpod/workspace-full

RUN go install -tags extended github.com/gohugoio/hugo@latest
