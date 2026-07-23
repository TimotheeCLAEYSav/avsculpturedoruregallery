import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";

// Les pages secondaires sont chargées à la demande (code splitting)
// afin d'alléger le bundle initial servant à la page d'accueil.
const APropos = lazy(() => import("./pages/APropos"));
const Collections = lazy(() => import("./pages/Collections"));
const CollectionDetail = lazy(() => import("./pages/CollectionDetail"));
const SavoirFaire = lazy(() => import("./pages/SavoirFaire"));
const Stages = lazy(() => import("./pages/Stages"));
const StagesSculpture = lazy(() => import("./pages/StagesSculpture"));
const StagesDorure = lazy(() => import("./pages/StagesDorure"));
const Contact = lazy(() => import("./pages/Contact"));
const ArtworkDetail = lazy(() => import("./pages/ArtworkDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Fallback minimal, sans flash blanc : la couleur de fond reprend le thème.
const RouteFallback = () => (
  <div className="min-h-screen bg-background" aria-busy="true" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:collectionId" element={<CollectionDetail />} />
            <Route path="/oeuvres/:slug" element={<ArtworkDetail />} />
            <Route path="/savoir-faire" element={<SavoirFaire />} />
            <Route path="/stages" element={<Stages />} />
            <Route path="/stages/sculpture-sur-bois" element={<StagesSculpture />} />
            <Route path="/stages/dorure-a-la-feuille" element={<StagesDorure />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
