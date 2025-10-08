from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List
import random

router = APIRouter()

class CalculateRequest(BaseModel):
    perBuyUSD: float
    totalBudgetUSD: float
    ethPriceUSD: float
    mode: str = "auto"

class Warning(BaseModel):
    level: str
    message: str

class Recommendation(BaseModel):
    type: str
    message: str

class Bundling(BaseModel):
    buysPerTx: int
    txCount: int
    strategy: str
    gasThreshold: float

class Costs(BaseModel):
    buyAmount: float
    gas: float
    brianFee: float
    total: float

class Funding(BaseModel):
    minRequired: float
    reserve: float

class Viability(BaseModel):
    viable: bool
    status: str
    message: str

class Calculation(BaseModel):
    mode: str
    totalBuys: int
    bundling: Bundling
    costs: Costs
    funding: Funding
    viability: Viability
    warnings: List[Warning]
    recommendations: List[Recommendation]

@router.post("/api/babybuy/calculate-funding")
async def calculate_funding(request: CalculateRequest):
    """
    Calculate Baby Buys funding requirements
    """
    try:
        per_buy = request.perBuyUSD
        total_budget = request.totalBudgetUSD
        eth_price = request.ethPriceUSD
        mode = request.mode
        
        # Auto mode detection
        if mode == "auto":
            mode = "ultra-micro" if per_buy < 0.10 else "economical"
        
        # Calculate total buys
        total_buys = int(total_budget / per_buy)
        
        # Bundling strategy
        if mode == "economical":
            buys_per_tx = 8
            strategy = "light.bundle"
        else:  # ultra-micro
            buys_per_tx = 1000
            strategy = "extreme.bundle"
        
        tx_count = max(1, total_buys // buys_per_tx)
        
        # Gas calculation (mock - assume 0.004 Gwei)
        gas_per_tx = 0.50  # $0.50 per transaction
        total_gas = gas_per_tx * tx_count
        
        # Costs
        buy_amount = total_budget
        gas_cost = total_gas
        brian_fee = total_budget * 0.10  # 10% on top
        total_cost = buy_amount + gas_cost + brian_fee
        
        # Reserve (5%)
        reserve = total_cost * 0.05
        min_required = total_cost + reserve
        
        # Viability
        viable = True
        status = "excellent"
        message = "Optimal conditions for execution"
        
        # Warnings
        warnings = []
        if mode == "ultra-micro" and (gas_cost / buy_amount) > 0.5:
            warnings.append(Warning(
                level="warning",
                message=f"Gas dominates at {int((gas_cost/buy_amount)*100)}% - This is normal for ultra-micro buys"
            ))
        
        # Recommendations
        recommendations = []
        if gas_cost / buy_amount > 0.25:
            recommendations.append(Recommendation(
                type="optimization",
                message=f"Consider increasing per-buy to ${per_buy * 10:.2f} to reduce gas percentage"
            ))
        
        calculation = Calculation(
            mode=mode,
            totalBuys=total_buys,
            bundling=Bundling(
                buysPerTx=buys_per_tx,
                txCount=tx_count,
                strategy=strategy,
                gasThreshold=0.01
            ),
            costs=Costs(
                buyAmount=buy_amount,
                gas=gas_cost,
                brianFee=brian_fee,
                total=total_cost
            ),
            funding=Funding(
                minRequired=min_required,
                reserve=reserve
            ),
            viability=Viability(
                viable=viable,
                status=status,
                message=message
            ),
            warnings=warnings,
            recommendations=recommendations
        )
        
        return {"calculation": calculation.dict()}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/api/gas/current")
async def get_current_gas():
    """
    Get current gas price (mock)
    """
    # Mock gas price - randomly fluctuate between 0.3 and 2.0 Gwei
    gas_price = round(random.uniform(0.3, 2.0), 4)
    
    return {
        "gasPrice": gas_price,
        "timestamp": "2024-10-08T00:00:00Z"
    }