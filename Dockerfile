#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq
WORKDIR /src
COPY ["netcore-react-docker.csproj", ""]
RUN dotnet restore "./netcore-react-docker.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "netcore-react-docker.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "netcore-react-docker.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "netcore-react-docker.dll"]