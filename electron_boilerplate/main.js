const { app, BrowserWindow } = require('electron');
const path = require('path');

function criarJanela() {
    // Configura a janela do aplicativo desktop
    const janela = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // Permite usar recursos do Node.js no front-end
            contextIsolation: false // Simplifica o acesso a scripts locais para fins didáticos
        }
    });

    // Carrega o arquivo HTML principal
    janela.loadFile('index.html');
}

// Inicializa a aplicação quando o Electron estiver pronto
app.whenReady().then(() => {
    criarJanela();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            criarJanela();
        }
    });
});

// Fecha o aplicativo quando todas as janelas forem fechadas (exceto no macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
