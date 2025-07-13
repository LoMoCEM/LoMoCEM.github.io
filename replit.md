# LaMoCEM Research Project

## Overview

This project is a research paper website for "LaMoCEM: A Prompt-Driven Cost Evaluation Framework using Large Language Models in Agile Development". It's built as a modern web application that presents academic research on using Large Language Models for cost estimation in Agile software development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The project follows a **full-stack TypeScript application** architecture with:

### Frontend Architecture
- **React-based SPA** using Vite as the build tool
- **Modern UI Components** with shadcn/ui component library built on Radix UI primitives
- **Styling** via Tailwind CSS with custom dark theme variables
- **State Management** using TanStack Query for server state
- **Routing** handled by Wouter (lightweight router)
- **TypeScript** for type safety throughout the client-side code

### Backend Architecture
- **Express.js server** with TypeScript
- **Minimal API** with health check and GitHub Pages export endpoints
- **In-memory storage** for development (MemStorage class)
- **Database Ready** with Drizzle ORM configured for PostgreSQL

### Build & Development
- **Vite** for fast development and optimized production builds
- **ESBuild** for server-side bundling
- **Development tooling** includes Replit integration and error overlays

## Key Components

### Frontend Components
1. **Research Paper Sections**: Modular components for Abstract, Methodology, Results, Downloads, and Footer
2. **Navigation**: Fixed header with smooth scrolling to sections
3. **UI Library**: Complete shadcn/ui component set for consistent design
4. **Animations**: Intersection observer hooks for scroll-triggered animations
5. **Code Display**: Syntax-highlighted code blocks using Prism.js

### Backend Services
1. **Express Server**: Minimal REST API with middleware for logging
2. **Storage Layer**: Abstract interface with in-memory implementation
3. **Database Schema**: User management schema ready for PostgreSQL
4. **Static File Serving**: Vite development server integration

### Data Layer
1. **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
2. **Schema Definition**: User table with username/password fields
3. **Migration System**: Database migrations in dedicated directory

## Data Flow

1. **Static Content**: Research data is stored in TypeScript constants and rendered client-side
2. **API Requests**: TanStack Query manages API state with proper error handling
3. **User Interaction**: Smooth scrolling navigation and responsive interactions
4. **Development**: Hot reloading via Vite with Replit integration

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks
- **Express**: Backend web framework
- **Vite**: Build tool and development server
- **Drizzle ORM**: Database toolkit with PostgreSQL support

### UI/UX Dependencies
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **TanStack Query**: Server state management

### Development Dependencies
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler
- **Wouter**: Lightweight client-side routing

### External Services
- **Neon Database**: PostgreSQL serverless database (configured)
- **GitHub Pages**: Static site deployment target
- **Prism.js**: Syntax highlighting for code blocks

## Deployment Strategy

### Development Environment
- **Replit Integration**: Special development tooling and banner
- **Hot Reloading**: Vite development server with Express backend
- **Environment Variables**: DATABASE_URL for PostgreSQL connection

### Production Deployment
1. **Static Site Generation**: Vite builds optimized static assets
2. **GitHub Pages Export**: Custom script for GitHub Pages deployment
3. **Server Bundle**: ESBuild creates production server bundle
4. **Database Migration**: Drizzle migration system for schema updates

### Build Process
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build (client + server)
- `npm run start`: Production server
- `npm run db:push`: Database schema synchronization

The architecture supports both development flexibility and production scalability, with the ability to easily switch from in-memory storage to PostgreSQL database when needed.