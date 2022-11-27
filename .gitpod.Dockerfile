FROM gitpod/workspace-full

RUN wget https://github.com/gohugoio/hugo/releases/download/v0.107.0/hugo_extended_0.107.0_linux-amd64.deb
RUN dpkg -i hugo_extended_0.107.0_linux-amd64.deb
