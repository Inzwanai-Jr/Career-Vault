# 1. FROM: Node 26, slim variant (Debian-based, smaller than full, safer than Alpine)
FROM node:26-bookworm-slim

# 2. WORKDIR: the app folder inside the container
WORKDIR /app

# 3. COPY dependency files first (the frontend counterpart of requirements.txt)
COPY package.json package-lock.json ./

# 4. Install deterministically from the lockfile
RUN npm ci

# 5. COPY the rest of the source code
COPY . .

# 6. Build the app for production
RUN npm run build

# 7. Start the production server
CMD ["npm", "start"]
