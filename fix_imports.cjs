const fs = require('fs');

function replaceInFile(file, replacements) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [search, replace] of replacements) {
        content = content.replace(search, replace);
    }
    fs.writeFileSync(file, content);
}

replaceInFile('src/pages/AlertsPage.tsx', [
    [/import React from "react";\n/g, ''],
    [/import \{ Bell, TrendingDown, Clock, Settings, ArrowRight, Trash2 \} from "lucide-react";/g, 'import { Bell, TrendingDown, Clock, Settings, Trash2 } from "lucide-react";']
]);

replaceInFile('src/pages/AuthPage.tsx', [
    [/import React, \{ useState \} from "react";/g, 'import { useState } from "react";']
]);

replaceInFile('src/pages/ChatbotPage.tsx', [
    [/import \{ Link \} from "react-router-dom";\n/g, ''],
    [/import \{ Send, Sparkles, Mic, History, Plus, MoreHorizontal, ShoppingCart, TrendingDown \} from "lucide-react";/g, 'import { Send, Sparkles, Mic, History, Plus, MoreHorizontal } from "lucide-react";'],
    [/import \{ Input \} from "\.\.\/components\/ui\/Input";\n/g, '']
]);

replaceInFile('src/pages/ComparePage.tsx', [
    [/import React from "react";\n/g, ''],
    [/import \{ ArrowLeft, Check, X, ShieldCheck, Sparkles, TrendingDown, ExternalLink \} from "lucide-react";/g, 'import { ArrowLeft, Sparkles, ExternalLink } from "lucide-react";'],
    [/import \{ Card, CardContent \} from "\.\.\/components\/ui\/Card";/g, 'import { Card } from "../components/ui/Card";']
]);

replaceInFile('src/pages/DashboardPage.tsx', [
    [/import React from "react";\n/g, ''],
    [/import \{ Link \} from "react-router-dom";\n/g, ''],
    [/import \{ Heart, Bell, Clock, Settings, TrendingDown, Eye, User as UserIcon, Sparkles \} from "lucide-react";/g, 'import { Heart, Bell, Clock, Settings, TrendingDown, User as UserIcon, Sparkles } from "lucide-react";'],
    [/import \{ Card, CardContent, CardHeader, CardTitle \} from "\.\.\/components\/ui\/Card";/g, 'import { Card, CardContent } from "../components/ui/Card";']
]);

replaceInFile('src/pages/ExplorePage.tsx', [
    [/import React, \{ useState \} from "react";/g, 'import { useState } from "react";'],
    [/import \{ Filter, ChevronDown, Heart, Sparkles, SlidersHorizontal \} from "lucide-react";/g, 'import { ChevronDown, Heart, Sparkles, SlidersHorizontal } from "lucide-react";']
]);

replaceInFile('src/pages/LandingPage.tsx', [
    [/import React from "react";\n/g, ''],
    [/import \{ Sparkles, ArrowRight, Zap, TrendingUp, Tag, ShieldCheck \} from "lucide-react";/g, 'import { Sparkles, ArrowRight, Zap, TrendingUp, ShieldCheck } from "lucide-react";']
]);

replaceInFile('src/pages/ProductDetailsPage.tsx', [
    [/import React from "react";\n/g, ''],
    [/const \{ id \} = useParams\(\);/g, 'useParams();']
]);

console.log("Done");
