# Overview

This is a bio link web application built with React, Express, and PostgreSQL. The project appears to be a personal profile landing page similar to Linktree, where users can display their profile information, bio, and social media links in a single page format. The application follows a full-stack architecture with a React frontend and Express backend, using Drizzle ORM for database operations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Built using Vite for fast development and building
- **UI Framework**: Utilizes shadcn/ui components with Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming and dark mode support
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation through @hookform/resolvers

## Backend Architecture
- **Express.js**: RESTful API server with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be easily swapped for database persistence
- **Development Setup**: Custom Vite integration for serving the React app in development with HMR support

## Data Layer
- **Database**: PostgreSQL with Neon Database serverless connection
- **Schema Management**: Drizzle migrations stored in `/migrations` directory
- **Type Safety**: Fully typed database schema with Zod validation schemas generated from Drizzle models
- **Current Schema**: Users table with id, username, and password fields

## Development Tools
- **Build System**: Vite for frontend bundling, esbuild for backend production builds
- **Type Checking**: Strict TypeScript configuration across frontend, backend, and shared modules
- **Code Organization**: Monorepo structure with shared types and schemas between frontend and backend
- **Development Experience**: Hot module replacement, runtime error overlays, and Replit-specific development tools

## Project Structure
The application follows a clear separation of concerns:
- `/client` - React frontend application
- `/server` - Express backend API
- `/shared` - Shared types, schemas, and utilities
- `/components` - Comprehensive UI component library based on shadcn/ui

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **Drizzle Kit**: Database migration and schema management tools

## UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Modern icon library for React applications

## Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin
- **esbuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking across the entire application

## Frontend Libraries
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Performant forms library with minimal re-renders
- **Wouter**: Lightweight routing library for React
- **date-fns**: Modern JavaScript date utility library

## Backend Libraries
- **express**: Web application framework for Node.js
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **nanoid**: URL-safe unique string ID generator

## Development Dependencies
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Runtime Error Handling**: Development-time error overlay for better debugging experience